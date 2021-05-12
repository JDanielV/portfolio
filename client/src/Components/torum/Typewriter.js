import React, { useState, useEffect } from 'react';

const Typewriter = ({ stringsArray }) => {

    // const index = useRef(0);

    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(100);
    const [stringIndex, setStringIndex] = useState(0);
    const [text, setText] = useState(stringsArray[stringIndex]);
    const [isTyping, setIsTyping] = useState(false);
    const [indexCount, setIndexCount] = useState(0);

    // useEffect(() => {
    //     setText(stringsArray[stringIndex]);

    // }, [stringIndex])

    useEffect(() => {


        if (currentText.length === 1 && isDeleting) {
            setText(stringsArray[stringIndex]);
        }

        if (currentText.length < text.length && !isDeleting && !isTyping) {
            setIsTyping(true);
            setTimeout(() => {
                setCurrentText((value) => value + text.charAt(indexCount));
                setIndexCount(indexCount + 1);
                setIsTyping(false);
            }, typeSpeed);
        }
        if (currentText.length === text.length && !isDeleting && !isTyping) {
            setIsDeleting(true);
            setTypeSpeed(1000);
        }
        if (currentText.length === text.length && isDeleting && !isTyping) {
            setTypeSpeed(50);
        }

        if (currentText.length > 0 && isDeleting && !isTyping) {
            setIsTyping(true);
            setTimeout(() => {
                setCurrentText((value) => value.substring(0, currentText.length - 1));
                setIndexCount(indexCount - 1);
                setIsTyping(false);
            }, typeSpeed);
        }

        if (currentText.length === 0 && isDeleting && !isTyping) {

            setIsDeleting(false);
            setCurrentText("");

            if (stringIndex < stringsArray.length - 1) {
                setStringIndex(stringIndex + 1);
            }
            else {
                setStringIndex(0);
            }
            setTypeSpeed(1000);
        }
        if (currentText.length === 0 && !isDeleting && !isTyping) {
            setCurrentText("");
            setTypeSpeed(100);
        };

    }, [currentText, isDeleting, isTyping, typeSpeed, stringIndex, stringsArray]);

    return (
        <h1 className="torum-landing__title">{currentText}</h1>
    );
};

export default Typewriter;