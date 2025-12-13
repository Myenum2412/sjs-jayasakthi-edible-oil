import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function Feature() {
  return (
    <div className="w-full py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular text-left">
                Pure Traditions, Bottled for Today.
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                From the kitchen to the prayer room, experience the purity of
                Sri Jayasakthi Edible Oils. Trusted since 1995.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto relative flex justify-between flex-col">
              <Image
                src="/Home/feature1.png"
                alt="Product 1"
                width={100}
                height={100}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-[-10] opacity-50 blur-[1px]"
              />
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">
                  A Legacy of Quality Since 1995
                </h3>
                <p className=" max-w-xl text-base">
                  At Sri Jayasakthi Edible Oils Pvt Ltd, we believe that quality
                  is not just a standard—it's a tradition. For over three
                  decades, we have been dedicated to extracting the finest oils
                  that serve your cooking, wellness, and spiritual needs.
                </p>
              </div>
            </div>
            <div className=" rounded-md relative aspect-square p-6 flex justify-between flex-col">
              <Image
                src="/Home/feature2.png"
                alt="Product 2"
                width={100}
                height={100}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-[-10] opacity-50 blur-[1px] "
              />
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">
                  Trusted by Generations
                </h3>
                <p className=" max-w-xl text-base">
                  Purity you can taste. Quality you can trust. Tradition you can
                  feel.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Pay supplier invoices
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Pay supplier invoices
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
