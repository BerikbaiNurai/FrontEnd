import { GetServerSideProps } from "next";
import { getUserAnalytics, getUserNotifications, getCurrentUser } from "@/lib/api";
import { User, Notification } from "@/types/user";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
      </header>

      <section className="analytics">
        <h2>Analytics</h2>
        <div className="stats">
          <div>Page Views: {analytics.pageViews.toLocaleString()}</div>
          <div>Sessions: {analytics.sessions.toLocaleString()}</div>
          <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>

      <section className="notifications">
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={notif.read ? "read" : "unread"}
            >
              <span className={`type ${notif.type}`}>{notif.type}</span>
              {notif.message}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>Last updated: {currentTime}</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
    const user = getCurrentUser();

    const notifications = 
        await getUserNotifications(user.id);
    const analytics = 
        await getUserAnalytics(user.id);

    return {
        props: {
            user,
            notifications,
            analytics,
            currentTime: new Date(). toISOString(),
        },
    };
};