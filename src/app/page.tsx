
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { newsItems } from '@/lib/placeholder-data';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { format } from 'date-fns';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  return (
    <div className="space-y-12">
      <section className="relative text-center bg-primary/20 p-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,0.5))]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground tracking-tight">
            Welcome to APSIS Hyd
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your all-in-one portal for school news, events, and information. Stay connected with our community.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/calendar">
                View Calendar <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-6 flex items-center gap-3">
          <Newspaper className="w-8 h-8 text-accent" />
          Latest News & Announcements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => {
            const newsImage = getImage(item.imageId);
            return (
              <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {newsImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={newsImage.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={newsImage.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pt-4 flex-grow">
                    <p className="text-muted-foreground">{item.summary}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4 text-sm text-muted-foreground">
                    <p>{format(item.date, 'MMMM d, yyyy')}</p>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}