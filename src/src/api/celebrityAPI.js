import instance from "@/api/instance.js";
import API from "@/constants/API.js";

/**
 * 셀럽 목록 조회 api
 * @param {number | string} pageIndex
 * @param {string=} keyword
 * @param {string=} sortType
 */

const getCelebInfoList = async ({ pageIndex, keyword, sortType }) => {
  return await instance({
    url: API.CELEBRITY.LIST,
    method: "GET",
    params: { pageIndex: pageIndex, keyword: keyword, sortType: sortType },
  });
};

/**
 * 셀럽 팔로우 api
 */
const postCelebFollow = async (celebId) => {
  return await instance({
    url: API.CELEBRITY.FOLLOW,
    method: "POST",
    data: { celebId },
  });
};

/**
 * 셀럽 언팔로우 api
 */
const postCelebUnfollow = async (celebId) => {
  return await instance({
    url: API.CELEBRITY.UNFOLLOW,
    method: "POST",
    data: { celebId },
  });
};

export default { getCelebInfoList, postCelebFollow, postCelebUnfollow };
