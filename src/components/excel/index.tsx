import {
  useComputed,
  useSignal,
  useSignalEffect,
  useSignals,
} from '@preact/signals-react/runtime';
import { FC } from 'react';

export const Excel: FC = () => {
  useSignals();
  const count = useSignal({ value: 0 });
  const double = useComputed(() => count.value.value * 2);

  useSignalEffect(() => {
    console.log(`Value: ${count.value.value}, value x 2 = ${double.value}`);
  });

  return (
    <button onClick={() => (count.value = { value: count.value.value + 1 })}>
      Value: {count.value.value}, value x 2 = {double.value}
    </button>
  );
};
