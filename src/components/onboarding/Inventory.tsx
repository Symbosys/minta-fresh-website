'use client';

import { useState, useEffect, useMemo } from 'react';
import { getVendorCategories, getVendorProducts, updateVendorInventory } from '@/action/inventory';
import Image from 'next/image';

interface Category {
    id: string;
    name: string;
    image: { url: string };
    isSelected?: boolean;
}

interface Product {
    id: string;
    name: string;
    categoryId: string;
    images: { image: { url: string } }[];
    isMandatory: boolean;
    vendorPrice: number;
    marketPrice?: number;
    sellingPrice: number;
    weight: string;
    pieces: string;
    isAvailable?: boolean;
}

export default function Inventory({ onNext }: any) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    // Selection State
    const [enabledCategories, setEnabledCategories] = useState<string[]>([]);
    const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
    const [activeTabId, setActiveTabId] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catsRes, prodsRes] = await Promise.all([
                    getVendorCategories(),
                    getVendorProducts()
                ]);

                if (catsRes.success && prodsRes.success) {
                    const apiCats = catsRes.data;
                    const apiProds = prodsRes.data.products;

                    setCategories(apiCats);
                    setProducts(apiProds);

                    // Hydrate State
                    const preSelectedCatIds = apiCats.filter((c: any) => c.isSelected).map((c: any) => c.id);
                    const preSelectedProdIds = apiProds.filter((p: any) => p.isAvailable).map((p: any) => p.id);

                    setEnabledCategories(preSelectedCatIds);
                    setSelectedProductIds(preSelectedProdIds);

                    if (apiCats.length > 0) {
                        setActiveTabId(apiCats[0].id);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch inventory data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const activeCategory = categories.find(c => c.id === activeTabId);
    const isCategoryEnabled = enabledCategories.includes(activeTabId);

    // Filter products for active tab
    const categoryProducts = useMemo(() =>
        products.filter(p => p.categoryId === activeTabId),
        [products, activeTabId]);

    const toggleCategory = (enabled: boolean) => {
        if (enabled) {
            setEnabledCategories(prev => [...prev, activeTabId]);
            // Select mandatory products
            const mandatoryIds = products
                .filter(p => p.categoryId === activeTabId && p.isMandatory)
                .map(p => p.id);

            setSelectedProductIds(prev => {
                const newIds = mandatoryIds.filter(id => !prev.includes(id));
                return [...prev, ...newIds];
            });
        } else {
            setEnabledCategories(prev => prev.filter(id => id !== activeTabId));
            // Unselect all products in category
            const catProdIds = products
                .filter(p => p.categoryId === activeTabId)
                .map(p => p.id);

            setSelectedProductIds(prev => prev.filter(id => !catProdIds.includes(id)));
        }
    };

    const toggleProduct = (productId: string, isMandatory: boolean) => {
        if (!isCategoryEnabled) {
            alert("Please enable this category to select products.");
            return;
        }
        if (isMandatory) return; // Cannot toggle mandatory

        setSelectedProductIds(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const handleSave = async () => {
        if (selectedProductIds.length === 0) {
            alert("Please select at least one product.");
            return;
        }

        setUpdating(true);
        try {
            const payload = {
                categoryIds: enabledCategories,
                productIds: selectedProductIds
            };

            const res = await updateVendorInventory(payload);
            if (res.success) {
                onNext({});
            } else {
                alert(res.message || "Failed to update inventory");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <i className="ri-loader-4-line animate-spin text-3xl text-minta-primary"></i>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto relative h-full">
            {/* Header removed to avoid duplication with OnboardingPage layout */}

            {/* Sticky Tabs Section */}
            <div className="sticky top-0 bg-white z-20 pb-4 border-b border-gray-100 mb-6 -mx-4 md:-mx-8 px-4 md:px-8">
                {/* Tabs */}
                <div
                    className="flex overflow-x-auto gap-4 pt-2 pb-2 px-2 scrollbar-none"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style jsx>{`
                        .scrollbar-none::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {categories.map(cat => {
                        const isActive = activeTabId === cat.id;
                        const isEnabled = enabledCategories.includes(cat.id);

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTabId(cat.id)}
                                className={`flex flex-col items-center shrink-0 transition-all ${!isEnabled && !isActive ? 'opacity-50 hover:opacity-100' : ''}`}
                            >
                                <div className={`w-16 h-16 rounded-full p-1 border-2 mb-2 relative transition-all ${isActive ? 'border-minta-primary scale-105' : 'border-transparent bg-white shadow-sm'}`}>
                                    <div className="w-full h-full relative rounded-full overflow-hidden bg-gray-100">
                                        {cat.image?.url ? (
                                            <Image src={cat.image.url} alt={cat.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Img</div>
                                        )}
                                    </div>
                                    {isActive && <div className="absolute inset-0 bg-minta-primary/10 rounded-full"></div>}
                                    {isEnabled && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-minta-primary rounded-full flex items-center justify-center border-2 border-white">
                                            <i className="ri-check-line text-white text-xs"></i>
                                        </div>
                                    )}
                                </div>
                                <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'text-minta-primary' : 'text-gray-500'}`}>
                                    {cat.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Category Action Bar */}
                {activeCategory && (
                    <div className="bg-white rounded-xl border-l-4 border-minta-primary p-4 shadow-sm flex justify-between items-center mt-2">
                        <div>
                            <h3 className="font-bold text-gray-900">Selling {activeCategory.name}?</h3>
                            <p className="text-xs text-gray-500 mt-1">
                                {isCategoryEnabled
                                    ? 'Toggle off to stop selling this category.'
                                    : 'Toggle on to select products.'}
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isCategoryEnabled}
                                onChange={(e) => toggleCategory(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-minta-primary"></div>
                        </label>
                    </div>
                )}
            </div>

            {/* Products Grid */}
            <div className="relative min-h-[400px]">
                {!isCategoryEnabled && (
                    <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-center">
                        <i className="ri-lock-2-line text-4xl text-gray-300 mb-2"></i>
                        <p className="text-gray-400 font-medium">Category Disabled</p>
                    </div>
                )}

                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24">
                        {categoryProducts.map(product => {
                            const isSelected = selectedProductIds.includes(product.id);
                            // Mandatory logic handled in toggle but visual consistency:
                            // If category enabled && mandatory -> it should be selected visually

                            return (
                                <div
                                    key={product.id}
                                    onClick={() => toggleProduct(product.id, product.isMandatory)}
                                    className={`relative bg-white rounded-xl overflow-hidden border transition-all cursor-pointer group hover:shadow-md ${isSelected ? 'border-minta-primary ring-1 ring-minta-primary bg-purple-50/30' : 'border-gray-200 opacity-90'}`}
                                >
                                    {/* Image */}
                                    <div className="h-32 w-full relative bg-gray-100">
                                        {product.images?.[0]?.image?.url ? (
                                            <Image src={product.images[0].image.url} alt={product.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                                        )}
                                        {/* Check Circle */}
                                        <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-colors ${isSelected ? 'bg-minta-primary text-white' : 'bg-white border border-gray-200 text-transparent'}`}>
                                            <i className={`ri-${isSelected ? 'check-line' : product.isMandatory ? 'lock-line' : 'circle-fill'} text-sm`}></i>
                                        </div>
                                        {/* Mandatory Tag */}
                                        {product.isMandatory && (
                                            <div className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                MANDATORY
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-3">
                                        <h4 className="font-bold text-gray-900 text-sm truncate mb-1">{product.name}</h4>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <span className="bg-gray-100 text-minta-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">{product.weight}</span>
                                            <span className="text-[10px] text-gray-400">•</span>
                                            <span className="text-[10px] text-gray-500">{product.pieces}</span>
                                        </div>
                                        <div className="border-t border-gray-50 pt-2 flex justify-between items-center">
                                            <span className="text-[10px] text-gray-400 uppercase font-bold">Your Price</span>
                                            <span className="text-sm font-extrabold text-minta-primary">₹{product.vendorPrice || product.sellingPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-400">
                        No products found in this category.
                    </div>
                )}
            </div>

            {/* Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:rounded-b-xl">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Total Active Items</p>
                        <p className="text-xl font-extrabold text-gray-900">{selectedProductIds.length} Products</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={updating}
                        className="bg-minta-primary hover:bg-[#6d14a0] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {updating ? (
                            <>
                                <i className="ri-loader-4-line animate-spin"></i>
                                <span>Saving...</span>
                            </>
                        ) : (
                            <>
                                <span>Save Changes</span>
                                <i className="ri-arrow-right-circle-line text-lg"></i>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
