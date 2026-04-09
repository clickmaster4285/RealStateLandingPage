'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogCard from './blog-card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  onViewAllToggle?: () => void;
}

export default function BlogSection({
  posts,
  title = "Latest Insights & Articles",
  subtitle = "Stay updated with the latest real estate trends, tips, and news",
  showViewAll = true,
  onViewAllToggle,
}: BlogSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post, idx) => (
            <BlogCard
              key={post.id}
              {...post}
              index={idx}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
  <div className="text-center mt-12">
    <Link
      href="/blogs"
      className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium group cursor-pointer"
    >
      View All Articles
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
)}
      </div>
    </section>
  );
}