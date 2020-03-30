export default function extractUrl(source) {
    const baseUrl = "https://static.wixstatic.com/media/"
    const dropFront = source.substring(15,source.length-1)
    const file = dropFront.substring(0,dropFront.indexOf("/"))
    const result = baseUrl+file
    // console.log(result);
    return result
  
}