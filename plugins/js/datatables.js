
$(document).ready(function () {
  // ✅ DataTable Init with only bottom pagination
  var table = $('#customTable').DataTable({
    paging: true,
    searching: true,
    info: true,
    lengthChange: false,
    responsive: true,
    dom: '<"table-container"t><"flex justify-between items-center mt-3"ip>', // pagination & info at bottom only
    language: {
      search: "_INPUT_",
      searchPlaceholder: "Search users...",
      info: "Showing _START_ to _END_ of _TOTAL_ users",
      paginate: { previous: "← Prev", next: "Next →" }
    }
  });

  // ✅ Style pagination dynamically
  $('#customTable').on('draw.dt', function () {
    $('.dataTables_paginate a').addClass('px-3 py-1 border rounded mx-1');
    $('.dataTables_paginate .current').addClass('bg-[#2AA8F2] text-white border-[#2AA8F2]');
  });

  // ✅ Role Filter
  $('#roleFilter').on('change', function () {
    table.column(2).search(this.value).draw();
    if (window.innerWidth < 768) closeDrawer();
  });

  // ✅ Date Filter
  $('#dateFilter').on('change', function () {
    var selectedDate = this.value;
    $.fn.dataTable.ext.search.push(function (settings, data) {
      var joinedDate = new Date(data[3]);
      var filterDate = new Date(selectedDate);
      if (!selectedDate) return true;
      return joinedDate >= filterDate;
    });
    table.draw();
    $.fn.dataTable.ext.search.pop();
    if (window.innerWidth < 768) closeDrawer();
  });

  // ✅ Search (click icon to apply)
  $('#applySearch').on('click', function (e) {
    e.preventDefault();
    var term = $('#customSearch').val();
    table.search(term).draw();
    if (window.innerWidth < 768) closeDrawer();
  });

  // ✅ Reset filters & search
  $('#resetFilters').on('click', function () {
    $('#roleFilter').val('');
    $('#dateFilter').val('');
    $('#customSearch').val('');
    table.search('').columns().search('').draw();
    if (window.innerWidth < 768) closeDrawer();
  });

  // ✅ Drawer open/close
  $('#openFilters').on('click', function () {
    $('#filterDrawer').removeClass('translate-x-full');
    $('body').addClass('overflow-hidden');
  });
  $('#closeFilters').on('click', closeDrawer);

  function closeDrawer() {
    $('#filterDrawer').addClass('translate-x-full');
    $('body').removeClass('overflow-hidden');
  }
});
