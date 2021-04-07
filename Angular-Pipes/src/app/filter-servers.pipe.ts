import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterServers",
})
export class FilterServersPipe implements PipeTransform {
  transform(servers: any, filterProperty: string, filterValue: string): any {
    if (servers.length == 0 || filterValue == "") {
      return servers;
    }
    let filteredServers = [];
    for (const server of servers) {
      if (server[filterProperty] == filterValue) {
        filteredServers.push(server);
      }
    }
    return filteredServers;
  }
}
