export const extractQuery = (search: string, author: string, repo: string) => {
  let query = ``;
  if(search?.length){
    query += `\"${search}\" `;
    query += `repo:${author}/${repo}`;
  }else{
    query += `+${author}/${repo}`;
  }
  return query;
}