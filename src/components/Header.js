'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, ChevronRight } from 'lucide-react';
import { Button } from '@src/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@src/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@src/components/ui/navigation-menu';

export default function Header() {
    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl">🩺</div>
                        <div className="text-xl font-bold text-gray-900">
                            Mama Care                        </div>
                    </Link>

                    <div />
                </div>
            </div>
        </header>
    );
}
