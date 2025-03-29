module.exports = async (page, url) => {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }); // Wait for the page to load completely
    const html = await page.content(); // <--- This grabs full DOM HTML
  
    return {
      url,
      html
    };
  };
  