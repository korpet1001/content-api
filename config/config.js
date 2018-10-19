exports.appSettings = {
    db: (function(){
        return process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/contentdb';
    })(),
    appInsightKey: '6aa8d939-b818-4c80-9482-95ad4104ca6a'
};
