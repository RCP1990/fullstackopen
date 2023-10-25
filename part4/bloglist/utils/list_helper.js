const dummy = (array) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item;
  };

  const blogsLikes = blogs.map((blogs) => blogs.likes);

  return blogsLikes.reduce(reducer, 0);
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {};
  } else {
    let authorCounts = blogs.reduce((authorCount, blog) => {
      authorCount[blog.author] = (authorCount[blog.author] || 0) + 1;
      return authorCount;
    }, {});
    let maxCount = Math.max(...Object.values(authorCounts));
    let mostFrequent = Object.keys(authorCounts).filter(
      (author) => authorCounts[author] === maxCount
    );
    return {
      author: mostFrequent[0],
      blogs: maxCount,
    };
  }
};

const favoriteBlog = (blogs) => {
  const blogsLikes = blogs.map((blogs) => blogs.likes);
  const largestIndex = blogsLikes.indexOf(Math.max(...blogsLikes));
  const largestinfo = blogs[largestIndex];

  return {
    title: largestinfo.title,
    author: largestinfo.author,
    likes: largestinfo.likes,
  };
};

const mostLikes = (blogs) => {
  // Group the blogs by author
  const groupedBlogs = blogs.reduce((acc, blog) => {
    if (acc[blog.author]) {
      acc[blog.author].push(blog);
    } else {
      acc[blog.author] = [blog];
    }
    return acc;
  }, {});

  // Calculate the total likes for each author
  const countedAuthors = Object.entries(groupedBlogs).map(([author, blogs]) => ({
    author: author,
    likes: blogs.reduce((totalLikes, blog) => totalLikes + blog.likes, 0),
  }));

  // Find the author with the most likes
  let maxLikesAuthor = countedAuthors[0];
  for (let i = 1; i < countedAuthors.length; i++) {
    if (countedAuthors[i].likes > maxLikesAuthor.likes) {
      maxLikesAuthor = countedAuthors[i];
    }
  }

  return {
    author: maxLikesAuthor.author,
    likes: maxLikesAuthor.likes,
  };
}


module.exports = {
  dummy,
  totalLikes,
  mostBlogs,
  favoriteBlog,
  mostLikes,
};
