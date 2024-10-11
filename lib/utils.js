import { getCookie } from "cookies-next"

export { default as cn } from "clsx"

export const STATUS_CODE_200 = 200

export const getModelVariant = (modelCodes, variants) => {
    if (!modelCodes || !variants) return []
  
    const matchedVariants = []
  
    // Create a new variable to hold the modelCodes data
    let modelCodesArray = Array.isArray(modelCodes)
      ? modelCodes
      : [{ modelCode: modelCodes }]
  
    for (let modelCodeObj of modelCodesArray) {
      if (variants[modelCodeObj.modelCode]) {
        matchedVariants.push(variants[modelCodeObj.modelCode])
      }
    }
  
    return matchedVariants
  }

  /**
 * This function gets the value of a specified key from an auth cookie.
 *
 * @param {('mobile'|'refreshToken'|'jwtAccessToken')} key - The key to get the value of.
 * @returns {string|boolean} The value of the specified key, or `false` if the key does not exist.
 */

  export function getAuthCookie(key) {
    const cookie = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE)
    if (!cookie) return null
    const decodedCookie = decode(cookie).split("#")
    const cookieObj = {
      mobile: decodedCookie[0],
      refreshToken: decodedCookie[1],
      jwtAccessToken: decodedCookie[2],
    }
    return cookieObj[key] !== undefined ? cookieObj[key] : false
  }

  export function decode(encodedString) {
    return Buffer.from(encodedString, "base64").toString("ascii")
  }

  export function encode(cookie) {
    return Buffer.from(cookie).toString("base64")
  }

  export const downloadFile = ({ fileUrl, fileName }) => {
    const anchor = document.createElement("a")
    anchor.href = fileUrl
    anchor.download = fileName
    anchor.target = "_blank"
    anchor.style.display = "none"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }
  
  export const isLessThan10Days = (dateString) => {
    const [datePart] = dateString.split(" ")
    const [day, month, year] = datePart.split("/").map(Number)
  
    const targetDate = new Date(year, month - 1, day)
  
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    const differenceInTime = targetDate - currentDate
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))
  
    return differenceInDays <= 10
  }
  
  export const formatDateOrDaysLeft = (dateString) => {
    // Parse the date string in "DD/MM/YYYY HH:MM:SS" format
    const [datePart, timePart] = dateString.split(" ")
    const [day, month, year] = datePart.split("/").map(Number)
    const [hours, minutes, seconds] = timePart.split(":").map(Number)
  
    // Create a Date object using the parsed values
    const targetDate = new Date(year, month - 1, day, hours, minutes, seconds)
    const currentDate = new Date()
  
    const differenceInTime = targetDate - currentDate
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))
  
    if (differenceInDays <= 30) {
      return `Expire in ${differenceInDays} days`
    }
  
    // Otherwise, format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(targetDate)
  
    return `valid thru. ${formattedDate}`
  }