var mouseEvent = "empty";
canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
{
color="blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx. lineWidth = 2;
ctx.arc(200,200, 40 ,0, 2 * Math.PI);
ctx.stroke();
}
{
    color="red";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx. lineWidth = 2;
    ctx.arc(150,150, 40 ,0, 2 * Math.PI);
    ctx.stroke();
    }
    {
        color="green";
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx. lineWidth = 2;
        ctx.arc(240,150, 40 ,0, 2 * Math.PI);
        ctx.stroke();
        }

        {
            color="blue";
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx. lineWidth = 2;
            ctx.arc(280,200, 40 ,0, 2 * Math.PI);
            ctx.stroke();
            }