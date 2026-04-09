'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import BlogCard from '@/components/blog-card';
import { blogPosts } from '@/lib/content-data';
import { Search, ChevronDown, X } from 'lucide-react';

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Get unique categories
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter posts based on search and category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const displayedPosts = filteredPosts.slice(0, visiblePosts);
    const hasMorePosts = visiblePosts < filteredPosts.length;

    const loadMore = () => {
        setVisiblePosts(prev => prev + 3);
    };

    // Scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <HeroSection
                title="Our Blog"
                subtitle="Insights, tips, and news from the real estate industry"
                primaryCtaText="Browse Properties"
                primaryCtaHref="/buy"
                secondaryCtaText="Contact Us"
                secondaryCtaHref="/contact"
                backgroundImage="/images/blog-hero1.jpg"
                showSearchBar={false}
            />

            {/* Blog Content Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Search and Filter Bar */}
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                            {/* Search Input */}
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    >
                                        <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                    </button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setVisiblePosts(6);
                                        }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                                ? 'bg-primary text-primary-foreground shadow-lg'
                                                : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                Showing {displayedPosts.length} of {filteredPosts.length} articles
                            </p>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    {displayedPosts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayedPosts.map((post, idx) => (
                                    <BlogCard
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        image={post.image}
                                        author={post.author}
                                        date={post.date}
                                        readTime={post.readTime}
                                        category={post.category}
                                        index={idx}
                                    />
                                ))}
                            </div>

                            {/* Load More Button */}
                            {hasMorePosts && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={loadMore}
                                        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium group"
                                    >
                                        Load More Articles
                                        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        // No Results
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                            <p className="text-muted-foreground mb-6">
                                We couldn't find any articles matching your search criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

         

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}

            <Footer />
        </main>
    );
}