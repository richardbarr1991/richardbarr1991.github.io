var headerContent = document.createElement('div')

headerContent.innerHTML = `
<h1>Richard Barr's Website</h1>
    <ul>
        <li>
            <a href="index.html"> HOME
        </li>
        <li>
            <a href="page-2.html"> Page 2
        </li>
        <li>
            <a href="css-flex.html"> CSS Flex
        </li>
    </ul>
`;

var header = document.querySelector('#header');

header.appendChild(headerContent);
