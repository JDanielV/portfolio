import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ stringsArray }) => {

    const index = useRef(0);
    // let stringIndex = 0;

    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(100);
    const [stringIndex, setStringIndex] = useState(0);
    const [text, setText] = useState(stringsArray[stringIndex]);

    // let text = stringsArray[stringIndex];

    useEffect(() => {
        index.current = 0;
        setCurrentText("");
    }, [text]);

    useEffect(() => {

        if (currentText.length < text.length && !isDeleting) {
            setTimeout(() => {
                setCurrentText((value) => value + text.charAt(index.current));
                index.current += 1;
            }, typeSpeed);
        }
        else if (currentText.length === text.length && !isDeleting) {
            setIsDeleting(true);
            setTypeSpeed(1000);
        }
        else if (currentText.length === text.length && isDeleting) {
            setTypeSpeed(50);
        }

        if (currentText.length > 0 && isDeleting) {
            setTimeout(() => {
                setCurrentText((value) => value.substring(0, currentText.length - 1));
                index.current -= 1;
            }, typeSpeed);
        }

        else if (currentText.length === 0 && isDeleting) {
            setIsDeleting(false);


            if (stringIndex < stringsArray.length - 1)
                setStringIndex(stringIndex + 1);
            else
                setStringIndex(0);

            setTypeSpeed(1000);
        }
        else if (currentText.length === 0 && !isDeleting) {
            setTypeSpeed(150);
        };

    }, [currentText, isDeleting, text]);

    useEffect(() => {
        setText(stringsArray[stringIndex]);
        // return () => {
        //     clearTimeout(deleteTimer);
        // };
    }, [stringIndex])

    return (
        <h1 className="torum-landing__title">{currentText}</h1>
    );
};

export default Typewriter;