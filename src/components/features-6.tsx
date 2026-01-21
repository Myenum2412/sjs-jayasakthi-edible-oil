import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { memo } from 'react'

interface Feature {
    icon: typeof Zap
    title: string
    description: string
}

const features: readonly Feature[] = [
    {
        icon: Zap,
        title: 'Faaast',
        description: 'It supports an entire helping developers and innovate.'
    },
    {
        icon: Cpu,
        title: 'Powerful',
        description: 'It supports an entire helping developers and businesses.'
    },
    {
        icon: Lock,
        title: 'Security',
        description: 'It supports an helping developers businesses innovate.'
    },
    {
        icon: Sparkles,
        title: 'AI Powered',
        description: 'It supports an helping developers businesses innovate.'
    }
]

const IMAGE_WIDTH = 2797
const IMAGE_HEIGHT = 1137
const IMAGE_SIZES = '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px'

const FeaturesSection = memo(function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">The Lyra ecosystem brings together our models</h2>
                    <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div>
                <div className="px-3 pt-3 md:-mx-8">
                    <div className="aspect-88/36 mask-b-from-75% mask-b-to-95% relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Feature illustration placeholder</p>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div key={feature.title} className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4" aria-hidden="true" />
                                    <h3 className="text-sm font-medium">{feature.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
})

export default FeaturesSection
