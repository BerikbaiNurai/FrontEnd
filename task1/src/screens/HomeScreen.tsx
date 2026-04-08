import { SafeAreaProvider } from "react-native-safe-area-context";
import { ResponsiveHeader } from "../components/ResponsiveHeader";
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
} from "../components/AdaptiveLayout";
import { GridLayout, Card } from "../components/GridLayout";

export function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ResponsiveHeader
        title="My App"
        rightAction={{ icon: "⚙️", onPress: () => {} }}
      />
      <AdaptiveLayout
        content={
          <>
            <StatsRow
              stats={[
                { label: "Users", value: "1.2K" },
                { label: "Posts", value: "340" },
                { label: "Likes", value: "8.9K" },
              ]}
            />
            <FeatureCard
              icon="🚀"
              title="Fast Performance"
              description="Optimized for all devices and screen sizes."
              variant="primary"
            />
            <FeatureCard
              icon="📱"
              title="Responsive Design"
              description="Adapts to phone, tablet, portrait and landscape."
              variant="secondary"
            />
            <FeatureCard
              icon="🎨"
              title="Modern UI"
              description="Clean layouts built with Flexbox."
              variant="accent"
            />
            <GridLayout columns={2} spacing={12}>
              <Card title="Card 1" subtitle="Grid item" />
              <Card title="Card 2" subtitle="Grid item" />
              <Card title="Card 3" subtitle="Grid item" />
              <Card title="Card 4" subtitle="Grid item" />
            </GridLayout>
          </>
        }
      />
    </SafeAreaProvider>
  );
}