import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import initialCounters from "./data/initial-counters";

function App() {
    const [counters, setCounters] = useState(initialCounters);

    const handleIncrement = (counterId) => {
        const updatedCounters = counters.map((counter) => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value + 1,
                };
            }
            return counter;
        });

        setCounters(updatedCounters);
    };

    const handleDecrement = (counterId) => {
        const updatedCounters = counters.map((counter) => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value - 1,
                };
            }
            return counter;
        });

        setCounters(updatedCounters);
    };

    const totalCount = counters.reduce(
        (sum, counter) => sum + counter.value,
        0
    );

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        count={counter.value}
                        onIncrement={() => handleIncrement(counter.id)}
                        onDecrement={() => handleDecrement(counter.id)}
                    />
                ))}

                <Stats count={totalCount} />
            </div>
        </div>
    );
}

export default App;
