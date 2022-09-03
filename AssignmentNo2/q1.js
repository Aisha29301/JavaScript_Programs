// Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene
function triangle(l,b,h){
    if(l==b || b==h){
        console.log("Isosceles triangle");
        area = (1/2)*b*h;
        console.log("Area of triangle: "+area);
    }
    else if(l==b && b==h && l==h){
        console.log("Equilateral triangle");
        areaEqui = Math.sqrt(3)/4*l*b;
        console.log("Area of Equilateral triangle: "+areaEqui);
    }else{
        console.log("Scalene triangle");
        s = (l+b+h)/2;
        areaScalene = Math.sqrt(s*(s-l)*(s-b)*(s-h));
        console.log("Area of Scalene triangle: "+areaScalene);
    }
}
// triangle(20,20,20);
// triangle(3,4,6);
triangle(2,2,5);

