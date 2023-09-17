const text = [
{content: "No text"},
{content: "JavaScript is a versatile and popular programming language used for web development. It was created by Brendan Eich in 1995 and has since become an essential tool for creating dynamic and interactive websites. JavaScript enables developers to add interactivity, manipulate web page elements, and handle events. It supports both front-end and back-end development, allowing for the creation of complex web applications. With JavaScript, you can validate user input, perform calculations, modify HTML and CSS, and interact with APIs to retrieve and display data. Its flexibility, extensive library ecosystem, and cross-platform compatibility make JavaScript a powerful and widely adopted language in the web development community."},
{content: "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for building applications on the .NET framework. C# offers a strong type system, garbage collection, and support for creating scalable and secure software solutions. With C#, developers can build desktop applications, web services, mobile apps, and games."},
{content: "C++ is a powerful and versatile programming language known for its efficiency and performance. It is widely used for system programming, game development, and high-performance applications. C++ provides features like object-oriented programming, templates, and low-level memory manipulation, making it suitable for building complex software systems."},
{content: "HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It defines the structure and content of a web page using tags. HTML tags are used to mark up elements such as headings, paragraphs, links, images, and more. Combined with CSS and JavaScript, HTML forms the foundation of the World Wide Web and enables the creation of interactive and visually appealing websites."},
{content: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS allows developers to control the layout, colors, fonts, and other visual aspects of a web page. It provides powerful styling capabilities, including selectors, inheritance, and cascading rules, enabling precise control over the appearance of web content."},
{content: "PHPython is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability and has a clean syntax, making it easy to learn and write. Python is widely used for various purposes, such as web development, data analysis, artificial intelligence, and scientific computing. Its extensive standard library and large community support make it a versatile language for a wide range of applications."},
{content: "Java is a general-purpose programming language that follows the write once, run anywhere principle. It is widely used for building enterprise-level applications, Android apps, and web services. Java offers features like platform independence, object-oriented programming, and automatic memory management. With its robust ecosystem and extensive libraries, Java has become a popular choice for building scalable and secure software solutions."},
{content: "PHP is a server-side scripting language designed for web development. It is widely used for creating dynamic web pages and web applications. PHP can interact with databases, handle form data, generate dynamic content, and perform various server-side tasks. It has a simple syntax and a large user community, making it easy to find resources and get support. PHP is commonly used in conjunction with HTML and CSS to create dynamic and interactive websites."}
];

//console.log(text[0].content);

const item = document.getElementById("input");
const button = document.getElementById("btn");

const generate = () => {
	const index = parseInt(item.value);
	const para = document.createElement("p");
	para.textContent = text[index].content;
	document.body.appendChild(para);
	//console.log(text[index].content);
};
//button function 
button.addEventListener("click", generate);