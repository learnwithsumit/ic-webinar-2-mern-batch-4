import Button from "./Button";
import Count from "./Count";

export default function Counter() {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={0} />

            <div className="flex space-x-3">
                <Button>Increment</Button>
                <Button type="danger">Decrement</Button>
            </div>
        </div>
    );
}
