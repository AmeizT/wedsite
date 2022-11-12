import moment from "moment"

export const timesince = moment.utc
moment.updateLocale("en", {
    relativeTime: {
        future: "in %s",
        past: "%s",
        s: "%d s ago",
        ss: "%d s ago",
        m: "1 m ago",
        mm: "%d mins ago",
        h: "1 h ago",
        hh: "%d hours ago",
        d: "1 d ago",
        dd: "%d days ago",
        M: "1 month ago",
        MM: "%d months ago",
        y: "1 year ago",
        yy: "%d years ago",
    },
})