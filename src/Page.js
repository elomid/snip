import React from "react";
import PageLink from "./PageLink";
import PageActions from "./PageActions";
import PageDescription from "./PageDescription";
import PagePublisher from "./PagePublisher";

function Page({ page, userId, lists, listId }) {
  return (
    <li className={page.archived ? "page page--archived" : "page"}>
      <PageLink url={page.url} title={page.title} />
      {page.publisher && <PagePublisher publisher={page.publisher} />}
      <PageDescription description={page.description} />
      <PageActions userId={userId} page={page} lists={lists} listId={listId} />
    </li>
  );
}

export default Page;
