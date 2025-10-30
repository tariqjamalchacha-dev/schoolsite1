
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { newsItems, announcementItems } from '@/lib/placeholder-data';
import Link from 'next/link';
import { ArrowRight, Newspaper, Megaphone } from 'lucide-react';
import { format } from 'date-fns';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId);
  }

  const sortedAnnouncements = [...announcementItems].sort((a, b) => b.date.getTime() - a.date.getTime());
  const heroImage = getImage('hero-building');

  return (
    <>
      <section className="relative h-96 w-full flex items-end justify-center pb-6">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 flex gap-4">
            <Button asChild size="lg">
                <Link href="/calendar">View Calendar</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
                <Link href="/about">Contact Us</Link>
            </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-3xl font-bold font-headline mb-6 flex items-center gap-3">
            <Megaphone className="w-8 h-8 text-accent" />
            Announcements
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedAnnouncements.map((item) => (
              <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative flex flex-col flex-grow p-6">
                  <CardHeader className="p-0 pr-24">
                    <CardTitle className="text-card-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4 flex-grow">
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                  <div className="absolute top-6 right-6 text-sm text-muted-foreground">
                    {format(item.date, 'MMMM d, yyyy')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline mb-6 flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-accent" />
            Events
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.slice(0, 3).map((item) => {
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
    </>
  );
}
