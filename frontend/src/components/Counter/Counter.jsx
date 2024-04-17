import React, { useEffect } from 'react';
import './Counter.css';

const NumberCountingAnimation = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            let initial_count = 0;
            const final_count = counter.dataset.count;
            let counting;

            counting = setInterval(updateCounting, 1);

            function updateCounting() {
                if (initial_count < 1000) {
                    initial_count += 5;
                    counter.innerText = initial_count;
                }

                if (initial_count >= 1000) {
                    initial_count += 100;
                    counter.innerText = (initial_count / 1000).toFixed(1) + 'K+';
                }

                if (initial_count >= 10000) {
                    initial_count += 5000;
                }

                if (initial_count >= 1000000) {
                    initial_count += 500000;
                    counter.innerText = (initial_count / 1000000).toFixed(1) + 'M+';
                }

                if (initial_count >= final_count) {
                    clearInterval(counting);
                }
            }
        });
        
        // Cleanup function to clear intervals
        return () => {
            counters.forEach(counter => {
                clearInterval(counter);
            });
        };
    }, []);

    return (
        <div className="container-counter">
          
            <div className="counters">
                <div className="counter-wrapper">
                    <span className="counter-icon">👨‍👩‍👧‍👧</span>
                    <div className="counter-info">
                        <h1 className="counter" data-count="15000000">0</h1>
                        <p>Monthly Visitors</p>
                    </div>
                </div>
                <div className="counter-wrapper">
                    <span className="counter-icon">💼</span>
                    <div className="counter-info">
                        <h1 className="counter" data-count="2200">0</h1>
                        <p>Total Projects</p>
                    </div>
                </div>
                <div className="counter-wrapper">
                    <span className="counter-icon">👨‍👧‍👧</span>
                    <div className="counter-info">
                        <h1 className="counter" data-count="12000000">0</h1>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberCountingAnimation;
