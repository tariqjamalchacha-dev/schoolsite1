"use client";

import { useState, useEffect } from "react";
import { format, isSameDay, isPast, isToday } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { schoolEvents } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const categoryColors: { [key: string]: string } = {
  Holiday: "bg-red-500/80",
  Academics: "bg-blue-500/80",
  "Social Event": "bg-purple-500/80",
  Ceremony: "bg-green-500/80",
  Sports: "bg-orange-500/80",
};

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const eventsOnSelectedDate = schoolEvents.filter(
    (event) => date && isSameDay(new Date(event.date), date)
  );
  
  const allSortedEvents = [...schoolEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const eventDays = schoolEvents.map(event => new Date(event.date));

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header>
        <h1 className="text-4xl font-bold font-headline tracking-tight">School Calendar</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Stay up-to-date with all school events, holidays, and important dates.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="flex justify-center items-start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="p-4"
            modifiers={{
              events: eventDays
            }}
            modifiersStyles={{
              events: {
                color: 'hsl(var(--accent-foreground))',
                backgroundColor: 'hsl(var(--accent))'
              }
            }}
          />
        </Card>
        <div>
          <h2 className="text-2xl font-semibold mb-4 font-headline">
            Events for: {date ? format(date, "MMMM d, yyyy") : "No date selected"}
          </h2>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-4">
              {eventsOnSelectedDate.length > 0 ? (
                eventsOnSelectedDate.map((event) => {
                  const eventDate = new Date(event.date);
                  const isEventPast = isPast(eventDate) && !isToday(eventDate);
                  const isEventToday = isToday(eventDate);
                  return (
                    <Card key={event.id} className={cn("transition-shadow hover:shadow-md", isEventPast && "opacity-60")}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{event.title}</CardTitle>
                          <div className="flex items-center gap-2">
                             {isEventToday ? (
                              <Badge className="bg-blue-600 text-white">Today</Badge>
                            ) : isEventPast ? (
                              <Badge className="bg-gray-500 text-white">Completed</Badge>
                            ) : (
                              <Badge className="bg-green-500 text-white">Upcoming</Badge>
                            )}
                            <Badge className={cn("text-white", categoryColors[event.category] || "bg-gray-500")}>
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-muted-foreground text-sm space-x-4">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {isClient ? <span>{format(eventDate, "p")}</span> : <span></span>}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{event.description}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <Card className="text-center">
                  <CardContent className="p-8">
                    <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No Events Today</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      There are no events scheduled for this day.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 font-headline">All Events</h2>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {allSortedEvents.map((event) => {
              const eventDate = new Date(event.date);
              const isEventPast = isPast(eventDate) && !isToday(eventDate);
              const isEventToday = isToday(eventDate);
              return (
                <Card key={`all-${event.id}`} className={cn("transition-shadow hover:shadow-md", isEventPast && "opacity-60")}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        {isEventToday ? (
                          <Badge className="bg-blue-600 text-white">Today</Badge>
                        ) : isEventPast ? (
                          <Badge className="bg-gray-500 text-white">Completed</Badge>
                        ) : (
                          <Badge className="bg-green-500 text-white">Upcoming</Badge>
                        )}
                        <Badge className={cn("text-white", categoryColors[event.category] || "bg-gray-500")}>
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                     <CardDescription>{isClient ? format(eventDate, "MMMM d, yyyy 'at' p") : format(eventDate, "MMMM d, yyyy")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{event.description}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
