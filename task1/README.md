<!-- How to Run -->
1. npm install 
2. npm run dev

<!-- Components -->
1. StepCounter: reusable counter with state (count, history, operations)
2. CounterApp: parent component rendering two independent counters

<!-- Explanation -->
Props define initial configuration (initialValue, step).
State is managed inside the component using useState and changes on user interaction.
Each component instance has two own state.