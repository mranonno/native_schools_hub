import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

let apiUrl = true
  ? "https://api.bootcampshub.ai/api"
  : "https://staging-api.bootcampshub.ai/api";
// let apiUrl =  'http://192.168.242.219:5000/api'

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// export const configureAxiosHeader = async () => {
//   const value = await AsyncStorage.getItem("user_token");

//   if (value) {
//     axiosInstance.defaults.headers.common = {
//       Authorization: value,
//     };
//   }

//   const enroll = await AsyncStorage.getItem("active_enrolment");
//   if (enroll) {
//     let enrollId = JSON.parse(enroll)?._id;
//     if (enrollId) {
//       axiosInstance.defaults.headers.common["enrollment"] = enrollId;
//     }
//   }

//   return;
// };

// export const isCancel = (error) => axios.isCancel(error); // Helper function
export default axiosInstance;

// export const handleVerify = async (shouldLoad) => {
//   try {
//     await configureAxiosHeader();
//     if (shouldLoad) {
//       setIsLoading(true);
//     }
//     axiosInstance
//       .post(/user/verify, {})
//       .then(async (res) => {
//         // return  store.dispatch(logout())
//         if (res.status === 200 && res.data.success) {
//           store.dispatch(setUser(res.data.user));

//           //store.dispatch(getMyNavigations())
//           //do some change state

//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.log("Error from app.js", err);
//         console.log(err);
//         setIsLoading(false);
//         store.dispatch(logout());
//       });
//   } catch (error) {
//     console.log("second");
//     console.log({ error });
//     // Error retrieving data
// }
// };
