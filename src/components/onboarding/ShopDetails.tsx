'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Autocomplete } from '@react-google-maps/api';
import { updateVendorProfile } from '@/action/vendor';

const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

export default function ShopDetails({ onNext, initialData }: any) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDp1m24jCv0artNLvNYGiRemEEjwAduk20',
        libraries,
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [center, setCenter] = useState({ lat: 23.3441, lng: 85.3096 }); // Default to Ranchi
    const [address, setAddress] = useState('');
    const [shopData, setShopData] = useState({
        shopName: '',
        contactNumber: '',
        fullAddress: '',
        floor: '',
        pincode: '',
        city: 'Ranchi',
        state: 'Jharkhand'
    });
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [searchResult, setSearchResult] = useState<google.maps.places.Autocomplete | null>(null);
    const [isReadOnly, setIsReadOnly] = useState(false);

    const mapRef = useRef<google.maps.Map | null>(null);

    useEffect(() => {
        if (initialData) {
            setShopData({
                shopName: initialData.shopName || '',
                contactNumber: initialData.contactNumber || '',
                fullAddress: initialData.completeAddress || initialData.mainAddress || '',
                floor: initialData.floor || '',
                pincode: initialData.pincode || '',
                city: initialData.city || 'Ranchi',
                state: initialData.state || 'Jharkhand'
            });
            if (initialData.latitude && initialData.longitude) {
                setCenter({
                    lat: parseFloat(initialData.latitude),
                    lng: parseFloat(initialData.longitude)
                });
            }

            // Check if shop details effectively exist to lock editing
            if (initialData.shopName && initialData.pincode) {
                setIsReadOnly(true);
            }
        }
    }, [initialData]);

    // Initial location only if no initialData or lat/lng missing AND not read-only
    useEffect(() => {
        if (!initialData?.latitude && !isReadOnly && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setCenter(pos);
                },
                () => {
                    console.log("Error getting location");
                }
            );
        }
    }, [initialData, isReadOnly]);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
        mapRef.current = null;
    }, []);

    const onIdle = useCallback(() => {
        if (!map || isReadOnly) return; // Don't reverse geocode if read-only
        const newCenter = map.getCenter();
        if (!newCenter) return;

        const lat = newCenter.lat();
        const lng = newCenter.lng();

        // Reverse Geocode
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                const formattedAddress = results[0].formatted_address;
                setAddress(formattedAddress);

                // Extract pincode, city, state
                let pincode = '';
                let city = 'Ranchi';
                let state = 'Jharkhand';

                results[0].address_components.forEach(comp => {
                    if (comp.types.includes('postal_code')) pincode = comp.long_name;
                    if (comp.types.includes('locality')) city = comp.long_name;
                    if (comp.types.includes('administrative_area_level_1')) state = comp.long_name;
                });

                setShopData(prev => ({
                    ...prev,
                    fullAddress: formattedAddress,
                    pincode,
                    city,
                    state
                }));
            }
        });
    }, [map, isReadOnly]);

    const handleSearchLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setSearchResult(autocomplete);
    };

    const handlePlaceChanged = () => {
        if (searchResult) {
            const place = searchResult.getPlace();
            if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setCenter({ lat, lng });
                map?.panTo({ lat, lng });
            }
        }
    };

    const handleCurrentLocation = () => {
        setLoadingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setCenter(pos);
                    map?.panTo(pos);
                    setLoadingLocation(false);
                },
                () => {
                    setLoadingLocation(false);
                    alert("Error getting location");
                }
            );
        } else {
            setLoadingLocation(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setShopData({ ...shopData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isReadOnly) {
            onNext({});
            return;
        }

        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('shopName', shopData.shopName);
            formData.append('contactNumber', shopData.contactNumber);
            formData.append('completeAddress', shopData.fullAddress); // Assuming backend expects 'completeAddress' based on initialData usage
            if (shopData.floor) formData.append('floor', shopData.floor);
            formData.append('pincode', shopData.pincode);
            formData.append('city', shopData.city);
            formData.append('state', shopData.state);
            formData.append('latitude', center.lat.toString());
            formData.append('longitude', center.lng.toString());

            // Advance status
            formData.append('status', 'SHOP_IMAGES_NOT_UPLOADED');

            const res = await updateVendorProfile(formData);

            if (res.success) {
                onNext({
                    ...shopData,
                    latitude: center.lat,
                    longitude: center.lng
                });
            } else {
                alert(res.message || "Failed to save shop details");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    if (!isLoaded) return <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">Loading Map...</div>;

    return (
        <div className="max-w-xl mx-auto">
            {isReadOnly && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
                    <i className="ri-lock-fill text-xl"></i>
                    <div>
                        <p className="font-bold text-sm">Shop Details Locked</p>
                        <p className="text-xs">Your shop details are already saved. Contact support to change them.</p>
                    </div>
                </div>
            )}

            {/* Map Section */}
            <div className={`relative h-80 rounded-xl overflow-hidden mb-6 border border-gray-200 ${isReadOnly ? 'pointer-events-none opacity-80' : ''}`}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    onIdle={onIdle}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: !isReadOnly,
                        draggable: !isReadOnly,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                    {/* Fixed Marker Overlay - implemented outside Map actually for centered pin */}
                </GoogleMap>

                {/* Centered Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none z-10 pb-1">
                    <img src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" alt="marker" className="w-8 h-8" />
                </div>

                {/* Search Bar */}
                {!isReadOnly && (
                    <div className="absolute top-4 left-4 right-4 z-10">
                        <Autocomplete
                            onLoad={handleSearchLoad}
                            onPlaceChanged={handlePlaceChanged}
                        >
                            <div className="relative">
                                <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Search for area, street name..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white shadow-md rounded-lg text-sm border-0 focus:ring-2 focus:ring-minta-primary outline-none"
                                />
                            </div>
                        </Autocomplete>
                    </div>
                )}

                {/* Current Location Button */}
                {!isReadOnly && (
                    <button
                        type="button"
                        onClick={handleCurrentLocation}
                        className="absolute bottom-4 right-4 bg-white p-2.5 rounded-full shadow-md text-gray-700 hover:text-minta-primary transition-colors z-10"
                        title="Use Current Location"
                    >
                        {loadingLocation ? (
                            <i className="ri-loader-4-line animate-spin text-xl"></i>
                        ) : (
                            <i className="ri-crosshair-2-line text-xl"></i>
                        )}
                    </button>
                )}
            </div>

            {/* Address Details */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
                <i className="ri-map-pin-line text-blue-600 mt-0.5 text-lg"></i>
                <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Delivering to</p>
                    <p className="text-sm text-gray-800 font-medium">
                        {address || "Locating..."}
                    </p>
                    {!isReadOnly && (
                        <button
                            type="button"
                            onClick={() => document.querySelector('textarea[name="fullAddress"]')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-xs text-blue-600 font-semibold mt-1 hover:underline"
                        >
                            CHANGE
                        </button>
                    )}
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Shop Name *</label>
                    <input
                        type="text"
                        name="shopName"
                        value={shopData.shopName}
                        onChange={handleChange}
                        placeholder="e.g. Gupta Sweets"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                        required
                        disabled={isReadOnly}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Contact Number *</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3 text-gray-500 font-medium">+91</span>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={shopData.contactNumber}
                            onChange={handleChange}
                            maxLength={10}
                            placeholder="Mobile number"
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                            required
                            disabled={isReadOnly}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Complete Address *</label>
                    <textarea
                        name="fullAddress"
                        value={shopData.fullAddress}
                        onChange={handleChange}
                        rows={3}
                        placeholder="House / Flat / Block No., Apartment, Road, Area"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                        required
                        disabled={isReadOnly}
                    ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Floor (Optional)</label>
                        <input
                            type="text"
                            name="floor"
                            value={shopData.floor}
                            onChange={handleChange}
                            placeholder="e.g. Ground Floor"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                            disabled={isReadOnly}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Pincode *</label>
                        <input
                            type="text"
                            name="pincode"
                            value={shopData.pincode}
                            onChange={handleChange}
                            maxLength={6}
                            placeholder="e.g. 834001"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                            required
                            disabled={isReadOnly}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                        <input
                            type="text"
                            value={shopData.city}
                            readOnly
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                        <input
                            type="text"
                            value={shopData.state}
                            readOnly
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-minta-primary hover:bg-[#6d14a0] text-white font-medium py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                        {isReadOnly ? (
                            <>
                                <span>Continue</span>
                                <i className="ri-arrow-right-line"></i>
                            </>
                        ) : submitting ? (
                            <>
                                <i className="ri-loader-4-line animate-spin text-xl"></i>
                                <span>Saving Details...</span>
                            </>
                        ) : (
                            <>
                                <span>Confirm shop details</span>
                                <i className="ri-arrow-right-line"></i>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
