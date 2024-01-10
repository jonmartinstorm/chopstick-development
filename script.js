document.getElementById('transformButton').addEventListener('click', function() {
    const tools = document.getElementById('tools').getElementsByTagName('span');
    for (let tool of tools) {
        tool.classList.toggle('transformed');
    }
});
