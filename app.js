function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          id: 1,
          name: "sayMyName"
        });
      } else {
        reject(new Error("Failed to get user"));
      }
    }, 2000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ]);
    }, 2000);
  });
}

function getSettings() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "en"
      });
    }, 2000);
  });
}

async function main() {
  try {
    const [user, settings] = await Promise.all([
      getUser(),
      getSettings()
    ]);

    console.log(user);
    console.log(settings);

    const posts = await getPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

main();