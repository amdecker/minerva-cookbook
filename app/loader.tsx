function imageLoader({src}: any) {
    const prefix = process.env.NODE_ENV === 'development' ? '' : '/minerva-cookbook'
    return prefix + src;
  }
  
export default imageLoader;