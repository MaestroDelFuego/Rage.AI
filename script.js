function toLower(str) {
    return str.toLowerCase();
}

function getRandomResponse(responses) {
    if (responses.length === 0) {
        return "I'm not sure how to respond to that. Can you ask me something else?";
    }

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function getWeatherInfo(userInput) {
    return new Promise(async (resolve, reject) => {
        const lowerInput = toLower(userInput);
        if (true) {
            const cityStartIndex = lowerInput; // Assuming "weather " is 7 characters long
            const city = userInput.substring(cityStartIndex);

            if (city) {
                const apiUrl = `https://wttr.in/${encodeURIComponent(city)}?format=%C+%t`;

                try {
                    const response = await fetch(apiUrl);
                    const data = await response.text();

                    if (response.ok) {
                        resolve(`Current weather in ${city}: ${data}`);
                    } else {
                        reject(`Error: Unable to fetch weather data for ${city}`);
                    }
                } catch (error) {
                    reject('An error occurred while fetching weather data.');
                }
            } else {
                resolve("I'm sorry, I didn't catch the city name. Can you ask again with a specific city?");
            }
        } else {
            resolve("I'm sorry, I didn't catch the city name. Can you ask again with a specific city?");
        }
    });
}

function generateResponse(userInput) {
    const lowerInput = toLower(userInput);

    // Responses based on keywords
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return getRandomResponse(["Hi there! How can I help you?", "Hello! What's up?"]);
    }
    else if (lowerInput.includes("how are you")) {
        return getRandomResponse(["I'm just a computer program, but thanks for asking!", "I'm doing well. How about you?"]);
    }
    else if (lowerInput.includes("goodbye") || lowerInput.includes("bye")) {
        return getRandomResponse(["Goodbye! Have a great day!", "See you later!", "Farewell!"]);
    }
    else if (lowerInput.includes("weather")) {
        // Extract the city name from the user input
        const pos = lowerInput.indexOf("weather in");
        if (pos !== -1) {
            const city = userInput.substring(pos + 11).trim(); // Assuming "weather in " is 11 characters long
            return getWeatherInfo(city);
        }
        else {
            return "I'm sorry, I didn't catch the city name. Can you ask again with a specific city?";
        }
    }
    else if (lowerInput.includes("joke")) {
        const jokes = [
            "Why did the bicycle fall over? Because it was two-tired!",
            "I told my wife she was shuffling the deck of cards wrong. Now she deals with it.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
            "I only know 25 letters of the alphabet. I don't know y.",
            "I used to play piano by ear, but now I use my hands and fingers.",
            "Why was the math book sad? Because it had too many problems.",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm on a whiskey diet. I've lost three days already.",
            "What did one ocean say to the other ocean? Nothing, they just waved.",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "Why did the chicken go to the seance? To talk to the other side!",
            "Why don't skeletons fight each other? They don't have the guts!",
            "Why couldn't the bicycle stand up by itself? It was two-tired!",
            "What do you get when you cross a snowman and a vampire? Frostbite.",
            "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
            "I only know 25 letters of the alphabet. I don't know y.",
            "I used to play piano by ear, but now I use my hands and fingers.",
            "Why was the math book sad? Because it had too many problems.",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm on a whiskey diet. I've lost three days already.",
            "What did one ocean say to the other ocean? Nothing, they just waved.",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "Why did the chicken go to the seance? To talk to the other side!",
            "Why don't skeletons fight each other? They don't have the guts!",
            "Why couldn't the bicycle stand up by itself? It was two-tired!",
            "What do you get when you cross a snowman and a vampire? Frostbite.",
            "Develop a platform for virtual art exhibitions, connecting artists with audiences worldwide and promoting digital art appreciation.",
            "Create an app that helps users build and maintain eco-friendly habits by providing personalized challenges and rewards.",
            "Design a smart home gardening system that automates watering, fertilizing, and monitoring plant health for urban dwellers.",
            "Develop a mobile app that facilitates neighborhood sharing of tools, reducing the need for individuals to purchase seldom-used items.",
            "Invent a personalized travel assistant app that curates unique itineraries based on users' interests, preferences, and travel history.",
            "Create a virtual reality fitness experience that simulates outdoor activities, making workouts more immersive and enjoyable.",
            "Design a community platform for sharing excess home-grown produce, fostering local food sustainability and reducing food waste.",
            "Develop an AI-driven tutoring app that matches students with personalized learning resources and study aids based on their academic needs.",
            "Invent a mobile app that connects pet owners with local pet-friendly businesses, services, and events in their area.",
            "Create an online platform for sharing and discovering eco-friendly DIY projects, promoting sustainable living practices.",
            "Design a smart home recycling system that sorts and compacts recyclables automatically, making recycling more efficient for users.",
            "Develop a virtual reality language learning experience that immerses users in everyday scenarios to enhance language acquisition.",
            "Invent a mobile app that connects users with eco-conscious travel options, promoting sustainable transportation choices.",
            "Create a platform for sharing and discovering community-driven public art installations, fostering creativity in public spaces.",
            "Design a mobile app that encourages users to explore nearby nature reserves and parks, promoting outdoor activities and environmental awareness.",
            "Develop an AI-powered cooking assistant that suggests recipes based on available ingredients, dietary preferences, and nutritional needs.",
            "Invent a sustainable and modular home furniture line that adapts to changing lifestyles and reduces furniture waste.",
            "Create a virtual reality mindfulness experience that helps users relax and manage stress through guided meditation and serene environments.",
            "Design a platform that connects remote workers with volunteer opportunities, allowing them to contribute to social causes globally.",
            "Develop a mobile app that educates users about endangered species and supports conservation efforts through donations and awareness campaigns.",
            "Invent a wearable device that monitors air quality and provides real-time alerts to help users avoid areas with poor air conditions.",
            "Create an online platform for organizing and participating in neighborhood clean-up events, promoting community engagement and environmental stewardship.",
            "Design a smart shopping cart that helps users make sustainable and budget-friendly choices by providing real-time product information and alternatives.",
            "Develop a mobile app that connects users with local repair professionals for electronic devices, promoting device repair and reducing electronic waste.",
            "Invent a personalized fitness app that adapts workouts based on users' fitness levels, preferences, and available equipment.",
            "Create a platform for sharing and discovering eco-friendly and locally sourced recipes, promoting sustainable and healthy eating.",
            "Design a mobile app that connects users with volunteer opportunities to support elderly individuals in their community.",
            "Develop an AI-driven personal stylist app that recommends sustainable and ethically produced fashion items based on users' preferences.",
            "Invent a community-driven platform for sharing excess garden produce, reducing food waste and fostering local connections."
        ];
        return getRandomResponse(jokes);
    }
    else if (lowerInput.includes("code") || lowerInput.includes("programming")) {
        return getRandomResponse(["I love helping with programming questions! What do you need assistance with?", "Coding is my favorite activity. What project are you working on?"]);
    }
    else if (lowerInput.includes("ideas") || lowerInput.includes("random")) {
        const ideas = [
            "Develop a sustainable urban farming system for small spaces, allowing individuals to grow their own fresh produce at home.",
            "Create an app that helps users track and reduce their carbon footprint by providing personalized tips and challenges for sustainable living.",
            "Design a wearable device that monitors posture and provides real-time feedback to encourage healthier sitting and standing habits.",
            "Develop a platform that connects local artisans with customers, promoting handmade and unique crafts from different cultures.",
            "Invent a smart mirror that analyzes skin health and recommends personalized skincare routines based on individual needs.",
            "Create a virtual language exchange platform that connects people looking to practice different languages through online video chats.",
            "Design a mobile app that gamifies the process of learning new skills, making education more engaging and enjoyable.",
            "Develop an AI-powered personal finance assistant that provides users with actionable insights and suggestions to improve their financial well-being.",
            "Invent a community-based transportation app that encourages carpooling and shared rides to reduce traffic congestion and carbon emissions.",
            "Create a mobile app that helps users discover and support local, sustainable, and ethical businesses in their community.",
            "Design an inclusive and accessible fitness app that caters to individuals with various abilities and promotes a diverse and supportive fitness community.",
            "Develop a platform that connects volunteers with local community projects, making it easier for people to contribute their time and skills.",
            "Invent a smart home energy management system that optimizes energy usage based on the occupants' behavior and preferences.",
            "Create an online platform for exchanging and recycling gently used clothing and accessories, promoting sustainable fashion practices.",
            "Design a mobile app that provides mental health support through guided meditation, mood tracking, and access to professional counseling services.",
            "Develop a virtual reality experience that allows users to explore and learn about endangered ecosystems, raising awareness about conservation efforts.",
            "Invent a smart traffic management system that uses real-time data to optimize traffic flow and reduce congestion in urban areas.",
            "Create an app that connects aspiring musicians with experienced mentors for virtual lessons and collaborative music projects.",
            "Design a low-cost, portable water purification device for use in areas with limited access to clean drinking water.",
            "Develop a platform that connects remote workers with virtual co-working spaces, fostering a sense of community and collaboration.",
            "Invent a personalized nutrition app that considers users' dietary preferences and restrictions to provide tailored meal plans and recipes.",
            "Create an AI-driven mental health chatbot that offers support, resources, and coping strategies to users experiencing stress or anxiety.",
            "Design a mobile app that helps users reduce screen time and digital distractions by encouraging mindful and intentional technology use.",
            "Develop an augmented reality museum guide that enhances visitors' experiences by providing interactive and informative content about exhibits.",
            "Invent a community-driven car-sharing platform that allows neighbors to share vehicles, reducing the overall number of cars on the road.",
            "Create a platform for virtual volunteering opportunities, connecting individuals with projects that align with their skills and interests.",
            "Design a sustainable packaging solution for the fast-food industry, reducing single-use plastic and promoting eco-friendly practices.",
            "Develop a mobile app that educates users about local wildlife and encourages participation in conservation efforts through citizen science projects.",
            "Invent a device that converts food waste into energy for household use, promoting sustainable waste management practices.",
            "Create an online marketplace for sharing and renting outdoor gear, encouraging sustainable and affordable access to recreational equipment."
          ];
        return getRandomResponse(ideas);
    }
    else if (lowerInput.includes("rage") || lowerInput.includes("rage.ai")) {
        return "Rage.AI is a cutting-edge, public AI project, committed to transparency and collaboration through its fully open-source nature. The initiative aims to cultivate a formidable artificial intelligence, currently at version 0.1. The project is hosted on GitHub, offering accessibility and encouraging contributions from a diverse community of developers and enthusiasts. You can explore and engage with the codebase at Rage.AI GitHub Repository(https://github.com/MaestroDelFuego/Rage.AI), where innovation and shared expertise converge in the pursuit of pushing the boundaries of AI technology.";
    }
    else {
        // Default response for unrecognized input
        return getRandomResponse(["I'm not sure how to respond to that. Can you ask me something else?", "Sorry, I didn't understand. Try a different question."]);
    }
}

function appendMessage(sender, message) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    appendMessage('You', userInput);

    try {
        // Use await to wait for the asynchronous response
        const chatbotResponse = generateResponse(userInput);
        appendMessage('Rage', chatbotResponse);
    } catch (error) {
        // Handle errors, if any
        console.error(`Error: ${error}`);
        appendMessage('Rage', 'An error occurred while processing your request.');
    }

    // Clear the input field
    document.getElementById('user-input').value = '';
}

