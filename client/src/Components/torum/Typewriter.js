import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, typeSpeed }) => {

    const index = useRef(0);

    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        index.current = 0;
        setCurrentText("");
    }, [text]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentText.length < text.length && !isDeleting) {
                setCurrentText((value) => value + text.charAt(index.current));
                index.current += 1;
            }
            else if (currentText.length === text.length && !isDeleting) {
                setIsDeleting(true);
            }

        }, typeSpeed);
        return () => {
            clearTimeout(timer);
        };
    }, [currentText, isDeleting, text]);

    useEffect(() => {
        const deleteTimer = setTimeout(() => {
            if (currentText.length > 0 && isDeleting) {
                setCurrentText((value) => value.substring(0, currentText.length - 1));
                index.current -= 1;
            }
            else if (currentText.length === 0 && isDeleting)
                setIsDeleting(false);
        }, typeSpeed);

        return () => {
            clearTimeout(deleteTimer);
        };
    }, [isDeleting, currentText])

    return (
        <h1 className="torum-landing__title">{currentText}</h1>
    );
};

export default Typewriter;