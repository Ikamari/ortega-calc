export default (points, param) => {
    return (points + param <= 10 ? 1 :
        (points  + param <= 14 ? 2 :
            (points  + param <= 18 ? 3 :
                (points  + param <= 22 ? 4 : 5))));
}
