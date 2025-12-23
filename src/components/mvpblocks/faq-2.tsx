'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { MinusIcon, PlusIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'Company Overview' | 'Products' | 'Manufacturing' | 'Support' ;
}

const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What is Sri Jayasakthi Edible Oils Pvt. Ltd. and when was it established?',
    answer:
      'Sri Jayasakthi Edible Oils Pvt. Ltd. is a leading manufacturer and supplier of premium-quality edible and non-edible oils in India. The company was established in 1985 and has over 40 years of experience in the edible oil industry, serving wholesalers, retailers, and industrial clients across Southern India and beyond.',
    category: 'Company Overview',
  },
  {
    id: '2',
    question: 'What types of oils does Sri Jayasakthi Edible Oils manufacture?',
    answer:
      'The company manufactures a wide range of edible and non-edible oils, including refined palm olien, pure coconut oil, roasted coconut oil, and high-grade castor oil. Each product is processed using advanced refining technology to ensure purity, quality, and nutritional value.',
    category: 'Products',
  },
  {
    id: '3',
    question: 'What is the production capacity of Sri Jayasakthi Edible Oils?',
    answer:
      'Sri Jayasakthi Edible Oils has a robust production capacity of 3,000 tonnes per month for refined palm olien and other edible oils. Additionally, the company produces 200 tonnes per month of coconut oil and roasted coconut oil, and 200 tonnes per month of castor oil.',
    category: 'Manufacturing',
  },
  {
    id: '4',
    question: 'How does the company ensure oil purity and quality?',
    answer:
      'The company combines traditional oil extraction expertise with modern refining and filtering technologies. Dedicated R&D and quality assurance teams monitor every stage of production to preserve natural taste, aroma, and nutritional value while maintaining strict quality standards.',
    category: 'Manufacturing',
  },
  {
    id: '5',
    question: 'Where are Sri Jayasakthi Edible Oils products distributed?',
    answer:
      'Sri Jayasakthi Edible Oils products are distributed across Southern India and supplied nationwide through a strong distribution network that serves wholesalers, retailers, and industrial buyers.',
    category: 'general',
  },
  {
    id: '6',
    question: 'What makes Sri Jayasakthi Edible Oils a trusted brand?',
    answer:
      'With over four decades of industry experience, large-scale manufacturing capacity, advanced technology, ethical sourcing, and a strong commitment to quality and purity, Sri Jayasakthi Edible Oils has earned long-term trust among customers and business partners.',
    category: 'general',
  },
  {
    id: '7',
    question: 'Does the company follow sustainable and ethical practices?',
    answer:
      'Yes. Sri Jayasakthi Edible Oils follows sustainable sourcing and ethical business practices. The company is committed to supporting farmers, empowering communities, and ensuring environmentally responsible manufacturing.',
    category: 'Manufacturing',
  },
  {
    id: '8',
    question: 'What is the mission of Sri Jayasakthi Edible Oils Pvt. Ltd.?',
    answer:
      'The mission of Sri Jayasakthi Edible Oils is to deliver pure, authentic, and superior-quality oils through innovation, integrity, and sustainable manufacturing practices while ensuring customer satisfaction and long-term trust.',
    category: 'Company Overview',
  },
  {
    id: '9',
    question: 'What is the long-term vision of the company?',
    answer:
      'The company’s vision is to become India’s most trusted and sustainable edible oil manufacturer, set new benchmarks in quality and purity, and expand into global markets while preserving the heritage of Indian oil craftsmanship.',
    category: 'Company Overview',
  },
  {
    id: '10',
    question: 'How can customers or distributors contact Sri Jayasakthi Edible Oils for support?',
    answer:
      'Customers, distributors, and business partners can reach out to Sri Jayasakthi Edible Oils through the official website or contact channels provided by the company for product inquiries, bulk orders, and business support.',
    category: 'Support',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'Company Overview', label: 'Company Overview' },
  { id: 'Products', label: 'Products' },
  { id: 'Manufacturing', label: 'Manufacturing' },
  { id: 'Support', label: 'Support' },
];

interface Faq2Props {
  showViewMore?: boolean;
  initialItemsCount?: number;
}

export default function Faq2({ showViewMore = false, initialItemsCount = 2 }: Faq2Props) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(!showViewMore);

  const filteredFaqs = useMemo(
    () =>
      activeCategory === 'all'
        ? faqItems
        : faqItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  // Determine which FAQs to display
  const displayedFaqs = useMemo(() => {
    if (!showViewMore || showAll) {
      return filteredFaqs;
    }
    return filteredFaqs.slice(0, initialItemsCount);
  }, [filteredFaqs, showViewMore, showAll, initialItemsCount]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleViewMore = () => {
    router.push('/contact');
  };

  return (
    <section id="faq-section" className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center relative">
          {/* View More Button - Top Right - Always Visible */}
          {showViewMore && (
            <div className="absolute top-0 right-0 md:right-4 z-10">
              <Button
                onClick={handleViewMore}
                variant="outline"
                size="sm"
                className="group flex items-center gap-2 rounded-full border-primary/50 bg-background/80 backdrop-blur-sm px-3 py-2 text-xs font-medium text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer md:px-4 md:text-sm"
                aria-label="View more FAQs on contact page"
              >
                <span className="hidden sm:inline">View More</span>
                <span className="sm:hidden">More</span>
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          )}

          <h2 className="text-foreground mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl pr-20 md:pr-0">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-2xl text-center">
            Find answers to common questions about our products, services, and company.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  'border-border h-fit overflow-hidden rounded-xl border',
                  expandedId === faq.id
                    ? 'shadow-3xl bg-card/50'
                    : 'bg-card/50',
                )}
                style={{ minHeight: '88px' }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-foreground text-lg font-medium">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="text-primary h-5 w-5" />
                    ) : (
                      <PlusIcon className="text-primary h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-border border-t px-6 pt-2 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
