# Event Category Reference

This file documents the available categories for events on the calendar and the colors associated with their ribbons/badges. When creating new events in `src/data/calendar.json`, use one of the following category keys to ensure consistent styling across the application.

The colors are defined in `src/app/calendar/page.tsx`.

## Categories and Colors

*   **Holiday**: Red
    *   **Key**: `Holiday`
    *   **Tailwind CSS Class**: `bg-red-500/80`

*   **Academics**: Blue
    *   **Key**: `Academics`
    *   **Tailwind CSS Class**: `bg-blue-500/80`

*   **Social Event**: Purple
    *   **Key**: `Social Event`
    *   **Tailwind CSS Class**: `bg-purple-500/80`

*   **Ceremony**: Green
    *   **Key**: `Ceremony`
    *   **Tailwind CSS Class**: `bg-green-500/80`

*   **Sports**: Orange
    *   **Key**: `Sports`
    *   **Tailwind CSS Class**: `bg-orange-500/80`

**Note:** Announcements do not currently have categories or colored ribbons. They are displayed as simple informational cards.
