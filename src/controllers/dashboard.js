const News = require("../models/news.model");
const NewsCate = require("../models/news_cate.model");
const User = require("../models/user.model");
const userType = require("../models/userType.model");

module.exports = {
  fetchData: async (req, res) => {
    const news = await News.find();
    const newsCate = await NewsCate.find();
    const user = await User.find();
    const userType = await User.find();

  

    const countUserGroupByDate = await User.aggregate([
      {
        $group: {
            "_id":{
                    "$dateToString":{"format":"%Y-%m-%d","date":"$createAt"}
                  },
                //   "first":{
                //     "$first":"$$ROOT"
                //   },
          distinctCount: { $sum: 1 },
          
        },
      },
      {$sort: { createAt : -1}}
    ]);
    console.log("countUserGroupByDate==>",countUserGroupByDate)
    const countNewsGroupByDate = await News.aggregate([
        {
          $group: {
              "_id":{
                      "$dateToString":{"format":"%Y-%m-%d","date":"$createAt"}
                    },
            distinctCount: { $sum: 1 },
          },
        },
      ]);
   
    // console.log(countUserGroupByDate);

    return res.status(200).json({
      news,
      newsCate,
      user,
      userType,
      countUserGroupByDate,
      countNewsGroupByDate
    });
  },
};
