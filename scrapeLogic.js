module.exports = async (page, url) => {
    await page.goto(url, { waitUntil: 'networkidle2' });
  
    const html = await page.content(); // <--- This grabs full DOM HTML
  
    return {
      url,
      html
    };
  };
  