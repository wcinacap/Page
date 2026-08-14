import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductPitch } from './components/ProductPitch';
import { InnovationManifesto } from './components/InnovationManifesto';
import { BlindBoxSimulator } from './components/BlindBoxSimulator';
import { CollectionShowcase } from './components/CollectionShowcase';
import { NfcArExperience } from './components/NfcArExperience';
import { DfamEngineering } from './components/DfamEngineering';
import { TargetAudience } from './components/TargetAudience';
import { PreOrderSection } from './components/PreOrderSection';
import { CommunityReviews } from './components/CommunityReviews';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { BundleOption, FigureItem } from './data/products';
import { sounds } from './utils/audioEffects';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { bundleId: 'display-case', quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [unlockedFigures, setUnlockedFigures] = useState<string[]>(['control-leader']);

  const handleAddToCart = (bundleId: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.bundleId === bundleId);
      if (existing) {
        return prev.map((item) =>
          item.bundleId === bundleId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { bundleId, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (bundleId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(bundleId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.bundleId === bundleId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (bundleId: string) => {
    setCartItems((prev) => prev.filter((item) => item.bundleId !== bundleId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleInstantBuy = (bundle: BundleOption) => {
    handleAddToCart(bundle.id, 1);
  };

  const handleUnlockFigure = (figureId: string) => {
    setUnlockedFigures((prev) => (prev.includes(figureId) ? prev : [...prev, figureId]));
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0A39E6] selection:text-white">
      {/* Header & Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSimulator={handleScrollToSimulator}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenSimulator={handleScrollToSimulator}
          onSelectBundle={(bundleId) => handleAddToCart(bundleId, 1)}
        />

        <ProductPitch
          onOpenSimulator={handleScrollToSimulator}
          onGoToPreOrder={() => {
            const el = document.getElementById('preventa');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <CollectionShowcase
          onSelectFigureToBuy={(fig: FigureItem) => {
            handleAddToCart('display-case', 1);
          }}
        />

        <InnovationManifesto
          onOpenSimulator={handleScrollToSimulator}
          onExploreCollection={() => {
            const el = document.getElementById('coleccion');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <BlindBoxSimulator
          unlockedFigures={unlockedFigures}
          onUnlockFigure={handleUnlockFigure}
          onAddToCart={(bundleId) => handleAddToCart(bundleId, 1)}
        />

        <NfcArExperience />

        <DfamEngineering />

        <TargetAudience
          onSelectBundle={(bundleId) => handleAddToCart(bundleId, 1)}
        />

        <PreOrderSection
          onAddToCart={handleAddToCart}
          onInstantBuy={handleInstantBuy}
        />

        <CommunityReviews />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Slide-over Cart & Checkout Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
