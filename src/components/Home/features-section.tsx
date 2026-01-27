import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold md:text-5xl">Experience the Essence of Purity</h1>
                    <p className="text-lg text-muted-foreground">Discover a range of premium edible oils crafted to perfection. From traditional extraction methods to modern quality standards, we ensure every drop adds value to your health.</p>
                </div>
                <div className="px-3 pt-3 md:-mx-8">
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <iframe
                            src="https://iframe.mediadelivery.net/embed/587211/e652e102-62e8-416f-a10c-f41eb9fbe7e2?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                            loading="lazy"
                            style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }}
                            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Pure & Natural</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Extracted from premium quality ingredients with no added preservatives.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Health & Vitality</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Rich in essential nutrients and vitamins to support a healthy lifestyle.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Quality Assured</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">ISO 9001:2015 Certified manufacturing ensuring highest safety standards.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Traditional Taste</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Preserving the authentic taste of tradition in every meal.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}