import { useState } from "react";

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openToggle = () => {
        setIsOpen(true);
    };

    const closeToggle = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        openToggle,
        closeToggle,
    };
};

export default useToggle;
