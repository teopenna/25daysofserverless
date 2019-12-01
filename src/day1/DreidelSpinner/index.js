module.exports = async function (context, req) {
    context.log('Dreidel Spinner function running...');

    const randomResult = Math.round(Math.random() * 3 + 1);
    const spinnerResults = {
        1: 'Nun',
        2: 'Gimmel',
        3: 'Hay',
        4: 'Shin'
    };

    context.res = {
        body: spinnerResults[randomResult] || 'Error spinning dreidel'
    };
};