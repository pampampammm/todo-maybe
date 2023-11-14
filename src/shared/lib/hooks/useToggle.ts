import { useCallback, useState } from 'react';

// Part 1
const useToggle = (initialState: boolean = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle] as const;
};

export default useToggle;
