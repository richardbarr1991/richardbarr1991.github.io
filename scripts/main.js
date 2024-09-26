var headerContent = document.createElement('div')

headerContent.innerHTML = `
<div id ="header">
<h1>Richard Barr's Website</h1>
    <ul>
        <li>
            <a href="index.html"> HOME
        </li>
        <li>
            <a href="page-2.html"> Page 2
        </li>
        <li>
            <a href="css-display.html"> CSS Display
        </li>
        <li>
            <a href="css-position.html"> CSS Position
        </li>
        <li>
            <a href="css-flex.html"> CSS Flex
        </li>
        <li>
            <a href="css-grid.html"> CSS Grid
        </li>
    </ul>
</div>
`;

var headerContainer = document.querySelector('#header-container');

headerContainer.appendChild(headerContent);
