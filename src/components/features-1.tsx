import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, Settings2, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Pure Quality, Trusted Heritage</h2>
                        <p className="mt-4">Delivering premium edible oils since 1980. From traditional extraction to modern refining, we ensure excellence in every drop.</p>
                    </div>
                    <Button asChild variant="outline" className="bg-primary text-white hover:bg-primary/90 hover:text-white border-none shrink-0 px-6 py-4 rounded-full">
                        <Link href="/products" className="flex items-center gap-2">
                            View More
                            <ChevronRight className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Diverse Packaging</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Wide range of packaging options from 50ml pouches to 15kg tins to suit every customer need.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Direct Factory Supply</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Experience the freshness of direct factory-to-business supply, ensuring competitive rates and reliability.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Quality Certified</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">ISO 9001:2015 certified production processes ensuring the highest standards of purity and health.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
