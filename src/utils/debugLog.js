const debugLog = (...data) => {
    if (process.env.NODE_ENV.trim() === 'production') return;
    console.log('%c Vdo.ai Dash: ', 'border-radius:5%; background-color: #edef6e; color: #222;',data);
};

export default debugLog;